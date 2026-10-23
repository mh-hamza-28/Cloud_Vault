# Cloud Vault Workflow

## 1. User onboarding
- User visits the landing page
- User creates an account from the sign-up flow
- Clerk verifies credentials and redirects to /home

## 2. Dashboard workflow
- User lands on the dashboard
- Dashboard shows uploaded media cards and status information
- User can navigate between dashboard, upload, and social-share tools

## 3. Video upload workflow
- User selects a video file
- Frontend validates file size and type
- Form data is sent to /api/video-upload
- Cloudinary uploads the video and returns optimized metadata
- Prisma records the uploaded video metadata in the database
- User is redirected back to the dashboard

## 4. Social asset workflow
- User uploads an image
- The app selects a social format
- Cloudinary transforms the image to the target aspect ratio
- User downloads the final asset

## 5. Maintenance workflow
- Validate environment variables
- Run Prisma generation during setup
- Use Next.js production build before deployment
- Monitor upload success, errors, and database health
