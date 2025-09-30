# EmailJS Setup Guide

This guide will help you set up EmailJS for automatic email sending without app passwords.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email provider
4. Connect your Gmail account (masterseal.sales@gmail.com)
5. Note down your **Service ID** (e.g., `service_xxxxxxx`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** `Contact Form: {{subject}} - {{from_name}}`

**Content:**

```
New Contact Form Submission

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the Master Seal Corporation website contact form.
```

4. Save the template and note down your **Template ID** (e.g., `template_xxxxxxx`)

## Step 4: Get Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxxxxx`)

## Step 5: Configure Environment Variables

Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Step 6: Test the Setup

1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out and submit the form
4. Check your Gmail inbox for the email

## Benefits of EmailJS

- ✅ No app passwords required
- ✅ Works directly from frontend
- ✅ Free tier: 200 emails/month
- ✅ Easy setup and configuration
- ✅ Professional email templates
- ✅ Reliable delivery

## Troubleshooting

- **Emails not sending:** Check your EmailJS dashboard for error logs
- **Template not found:** Verify your template ID is correct
- **Service not found:** Verify your service ID is correct
- **Authentication failed:** Check your public key

## Free Tier Limits

- 200 emails per month
- 2 email services
- 2 email templates
- Perfect for small to medium businesses
