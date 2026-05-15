# Green Spirit Email Templates

Beautiful, responsive email templates for Supabase and transactional emails.

## Templates Included

### 1. Email Verification (`email-verification.html`)
For Supabase email confirmation with verification code.
- Clean green gradient design
- Prominent verification code display
- Expiry warning
- Supabase-compatible variables: `{{ .Token }}`, `{{ .ConfirmationURL }}`

### 2. Event Registration (`event-registration.html`)
Confirmation for event sign-ups.
- Purple gradient header
- Event details card with icons
- Ticket section with QR placeholder
- Calendar integration button
- Reminder notification box

### 3. Coach Training Registration (`coach-training-registration.html`)
For coach certification program enrollments.
- Training modules breakdown
- Schedule timeline
- Lead trainer profile
- Pre-training checklist
- Learning portal access

### 4. Membership Confirmation (`membership-confirmation.html`)
Premium membership welcome email.
- Gold/amber premium theme
- Member ID card design
- Benefits grid
- Billing details
- Member portal access
- 30-day guarantee notice

## Variable Placeholders

All templates use Go template syntax for Supabase compatibility:

**Email Verification:**
- `{{ .Token }}` - 6-digit verification code
- `{{ .ConfirmationURL }}` - Magic link URL
- `{{ .SiteURL }}` - Your website URL

**Event Registration:**
- `{{ .User.FirstName }}`, `{{ .User.FullName }}`
- `{{ .Event.Name }}`, `{{ .Event.Date }}`, `{{ .Event.Time }}`, `{{ .Event.Location }}`
- `{{ .Ticket.ID }}`, `{{ .Ticket.Type }}`, `{{ .Ticket.Quantity }}`
- `{{ .Event.CalendarLink }}`, `{{ .Event.DetailsLink }}`

**Coach Training:**
- `{{ .User.FirstName }}`
- `{{ .Training.Name }}`, `{{ .Training.StartDate }}`, `{{ .Training.EndDate }}`, `{{ .Training.Day }}`, `{{ .Training.Time }}`
- `{{ .Trainer.Name }}`, `{{ .Trainer.Title }}`
- `{{ .Training.PortalLink }}`

**Membership:**
- `{{ .User.FirstName }}`
- `{{ .Membership.Tier }}`, `{{ .Membership.ID }}`, `{{ .Membership.Price }}`
- `{{ .Membership.BillingCycle }}`, `{{ .Membership.StartDate }}`, `{{ .Membership.RenewalDate }}`
- `{{ .MemberPortal.URL }}`, `{{ .App.DownloadLink }}`

## Usage with Supabase

1. Go to Supabase Dashboard → Authentication → Email Templates
2. Copy the HTML content into the appropriate template
3. Replace variable placeholders with Supabase's format:
   - `{{ .Token }}` → `{{ .Token }}`
   - `{{ .ConfirmationURL }}` → `{{ .ConfirmationURL }}`
   - `{{ .SiteURL }}` → `{{ .SiteURL }}`

## Usage with Hostpoint.ch (or other SMTP)

When connecting your email provider:

1. Use a template engine (Handlebars, Mustache, or Go templates) to render the HTML
2. Replace variables with actual data before sending
3. Send via SMTP with HTML content type

## Testing

Open any template directly in your browser to preview the design.
For actual email testing, use:
- Litmus
- Email on Acid
- Gmail/Outlook preview

## Design System

- **Primary Color:** Emerald green (#10b981)
- **Secondary Colors:** Purple (#8b5cf6), Amber (#f59e0b)
- **Fonts:** System font stack (safe for email)
- **Max Width:** 600px (email standard)
- **Responsive:** Mobile-optimized with media queries
