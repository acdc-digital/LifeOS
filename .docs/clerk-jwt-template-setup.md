# CLERK JWT TEMPLATE SETUP - CONVEX INTEGRATION FIX

## Error Resolution: "No JWT template exists with name: convex"

This error occurs because Clerk needs a custom JWT template configured for Convex integration.

### Steps to Fix:

1. **Go to Clerk Dashboard**
   - Visit: https://dashboard.clerk.com/
   - Select your application: "premium-monkfish-43"

2. **Navigate to JWT Templates**
   - In the left sidebar, click "JWT Templates"
   - Click "New template" button

3. **Create Convex Template**
   - **Name**: `convex` (exactly this name)
   - **Template type**: Custom
   - **Signing algorithm**: RS256 (default)

4. **Configure Claims**
   Add these custom claims in the template:
   ```json
   {
     "iss": "{{env.CLERK_JWT_ISSUER_DOMAIN}}",
     "sub": "{{user.id}}",
     "iat": {{date.now}},
     "exp": {{date.now_plus_5_minutes}},
     "aud": "convex"
   }
   ```

5. **Save Template**
   - Click "Apply changes"
   - The template will be available immediately

### Alternative: Use Environment Variable Approach

If you prefer to use environment variables instead of hardcoded domain:

1. Update `convex/auth.config.ts`:
   ```typescript
   const authConfig = {
     providers: [
       {
         domain: process.env.CLERK_JWT_ISSUER_DOMAIN,
         applicationID: "convex",
       },
     ],
   };
   ```

2. Ensure `.env.local` has:
   ```bash
   CLERK_JWT_ISSUER_DOMAIN=https://dashing-dogfish-75.clerk.accounts.dev
   ```

### Current Configuration:
- ✅ CLERK_SECRET_KEY: Set
- ✅ NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: Set  
- ✅ CLERK_JWT_ISSUER_DOMAIN: Set
- ✅ Convex middleware: Configured
- ❌ JWT Template "convex": **MISSING** (needs to be created)

### Next Steps:
1. Create the JWT template as described above
2. Restart your development server: `pnpm dev`
3. Your Convex integration should work properly

The JWT template is required for Clerk to generate tokens that Convex can validate for authentication.
