# GitHub Project Guide

## Recommended repository structure
- app/
- components/
- docs/
- prisma/
- public/
- types/

## Suggested GitHub workflow
1. Create a main branch for production-ready work
2. Work in feature branches for new components or fixes
3. Commit with clear, specific commit messages
4. Open pull requests for review before merging
5. Validate with npm run build before merging to main

## Recommended PR checklist
- App builds successfully
- Auth routes work properly
- Upload flow works with valid credentials
- Dashboard loads without runtime errors
- Documentation reflects new functionality

## Deployment notes
- Store environment variables securely in Vercel or hosting secrets
- Enable production database connectivity
- Configure Cloudinary and Clerk credentials in deployment environment
- Test the live app after deployment
