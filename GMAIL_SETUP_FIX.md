# How to Fix Gmail Authentication Error (412 Error)

## Error Message:
```
Gmail_API: Request had insufficient authentication scopes
```

This means your Gmail integration with EmailJS doesn't have the correct permissions.

## Solution:

### Step 1: Reconnect Gmail Service in EmailJS

1. Go to your EmailJS dashboard: https://dashboard.emailjs.com/
2. Navigate to **"Email Services"** in the left menu
3. Find your Gmail service and click on it
4. Click **"Reconnect"** or **"Update"** button
5. This will take you back to Google's authorization page

### Step 2: Grant ALL Permissions

**IMPORTANT:** When Google asks for permissions, you MUST check ALL the permission boxes:

- ✅ **Send email on your behalf**
- ✅ **Read your email** 
- ✅ **Modify your email settings**
- ✅ **Any other permissions requested**

**Do NOT uncheck any permissions.** Click **"Allow"** or **"Authorize"**

### Step 3: Update Your EmailJS Template Variable Names

Go to **Email Templates** → Edit your template (`template_ccc662u`)

**Your template should use ANY of these variable names:**
```
Name: {{from_name}} OR {{name}} OR {{user_name}}
Email: {{from_email}} OR {{email}} OR {{user_email}}
Message: {{message}}
```

**Example template content:**

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Content:**
```
You received a new message from your portfolio contact form!

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

### Step 4: Save and Test

1. Save your template in EmailJS
2. Go back to your portfolio contact form
3. Try submitting a test message
4. Check your Gmail inbox!

---

## Alternative: Use a Different Service (If Gmail Keeps Failing)

If you continue having issues with Gmail, you can use **Outlook** or a **Custom SMTP** server instead:

1. In EmailJS, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Outlook"** or **"Custom SMTP"**
4. Follow the setup instructions

---

## Still Having Issues?

If you still get errors after reconnecting Gmail, try this:

1. **Disconnect** the current Gmail service in EmailJS
2. **Delete** the service
3. **Create a new** Gmail service
4. Make sure to grant ALL permissions when asked

Make sure you're logged into the Gmail account that owns the email you want to receive messages at (`ipamihir2003@gmail.com`).

