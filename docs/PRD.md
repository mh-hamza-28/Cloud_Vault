# Product Requirements Document (PRD)

## Product name
Cloud Vault

## Vision
Cloud Vault is a secure media SaaS that enables creators and teams to upload, optimize, and share digital content from a single, polished workspace.

## Problem statement
Teams need a simple way to upload video content, reduce file weight without sacrificing quality, and publish assets across social channels without relying on scattered tools.

## Target users
- Content creators
- Marketing teams
- Small businesses
- Agencies managing uploads and distribution

## Core features
1. Secure video upload workflow
2. Content preview and metadata tracking
3. Compression analytics and performance visibility
4. Social-post format transformation
5. Protected account experience with Clerk authentication

## User journeys
- Sign up and verify account
- Upload video content
- Track upload metadata and compression savings
- Preview and download optimized assets
- Share content across social channels

## Functional requirements
- Authenticated access to dashboard and upload flows
- Video file validation and size checks
- Cloudinary-based upload and transformation pipeline
- Responsive dashboard design
- Prisma-backed metadata storage

## Non-functional requirements
- Fast page loads with Next.js app router
- Secure route guarding via Clerk middleware
- Clean mobile-friendly UI
- Production-ready build and deployment readiness

## Success metrics
- Upload success rate
- Average upload time
- Compression savings percentage
- User sign-up conversion
- Dashboard engagement and repeat use
