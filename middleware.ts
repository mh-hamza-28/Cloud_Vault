import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
]);

export default clerkMiddleware((auth, req) => {
  const { userId } = auth();
  const pathname = req.nextUrl.pathname;
  const isAuthPage = pathname === '/sign-in' || pathname.startsWith('/sign-in/') || pathname === '/sign-up' || pathname.startsWith('/sign-up/');
  const isApiRequest = pathname.startsWith('/api');

  if (userId && isAuthPage) {
    return NextResponse.redirect(new URL('/home', req.url));
  }

  if (userId && pathname === '/') {
    return NextResponse.redirect(new URL('/home', req.url));
  }

  if (!userId && !isPublicRoute(req) && !isApiRequest) {
    return NextResponse.redirect(new URL('/sign-in', req.url));
  }

  if (!userId && isApiRequest) {
    return NextResponse.redirect(new URL('/sign-in', req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
