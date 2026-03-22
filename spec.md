# SMart Dental Clinic

## Current State
Full dental clinic website with hero, about, services, why choose us, booking form, testimonials, contact, and footer sections. Backend stores appointments and contact form submissions. No authentication or admin dashboard exists.

## Requested Changes (Diff)

### Add
- Internet Identity login button in the Navbar (visible to all users)
- Admin dashboard page accessible only after login via Internet Identity
- Admin dashboard shows all submitted appointments and contact form messages
- Role-based access: only the first user to log in (or a designated principal) gets admin access
- Protect getAllAppointments and getAllContactForms to only be callable by admins

### Modify
- Navbar: add Login/Logout button using Internet Identity
- App.tsx: add routing so /admin shows the admin dashboard when logged in

### Remove
- Nothing removed

## Implementation Plan
1. Select `authorization` Caffeine component
2. Regenerate Motoko backend with authorization integrated -- admin-only access to getAllAppointments and getAllContactForms
3. Add Login/Logout button to Navbar using the auth hooks from the authorization component
4. Create AdminDashboard component that shows appointments and contact form submissions
5. Add route-based or state-based navigation to show AdminDashboard when logged in as admin
