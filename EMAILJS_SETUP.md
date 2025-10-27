# EmailJS Setup Instructions

## 📧 How to Set Up Email Functionality for Contact Form

### Step 1: Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's free for up to 200 emails/month)
3. Verify your email

### Step 2: Add an Email Service
1. Log into your EmailJS dashboard
2. Go to **"Email Services"** in the left menu
3. Click **"Add New Service"**
4. Choose your email provider:
   - **Gmail** (recommended)
   - Outlook
   - Custom SMTP
5. Connect your email account
6. **Copy your Service ID** (service_py9tfj1)

### Step 3: Create an Email Template
1. In EmailJS, go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template content:

**Subject:**
```
New Contact Form Message from {{from_name}}
```

**Content (HTML or Text):**
```
You received a new message from your portfolio contact form!

Name: {{from_name}}
Email: {{user_email}}

Message:
{{message}}

Reply to: {{user_email}}
```

**⚠️ Important:** The template must use these exact variable names:
- `{{from_name}}` - Sender's name
- `{{user_email}}` - Sender's email address
- `{{message}}` - Message content
- `{{to_email}}` - Your recipient email (set automatically)
- `{{reply_to}}` - Reply-to address (set automatically)

4. **Copy your Template ID** (template_ccc662u)

### Step 4: Get Your Public Key
1. Go to **"Account"** → **"General"**
2. Copy your **Public Key** (p-Yg_bbse_2LRxF_F)

### Step 5: Update the Contact.jsx File
Open `src/components/Contact.jsx` and replace these three placeholders:

1. Line 52: Replace `'YOUR_SERVICE_ID'` with your Service ID
2. Line 53: Replace `'YOUR_TEMPLATE_ID'` with your Template ID  
3. Line 60: Replace `'YOUR_PUBLIC_KEY'` with your Public Key

For example:
```javascript
const result = await emailjs.send(
  'service_your123',      // Your actual Service ID
  'template_your456',     // Your actual Template ID
  {
    from_name: formData.from_name,
    from_email: formData.from_email,
    message: formData.message,
    to_email: 'ipamihir2003@gmail.com',
  },
  'Your_Public_Key'       // Your actual Public Key
)
```

### Step 6: Test the Form
1. Run your development server: `npm run dev`
2. Go to the Contact page
3. Fill out the form and click "Send Message"
4. Check your email inbox for the message!

---

## 🎉 That's it!
Your contact form will now send messages directly to your email when visitors submit the form.

## 📝 Notes:
- The free plan allows up to 200 emails per month
- For more emails, upgrade to a paid plan
- The form includes loading states and success/error messages
- All form data is sent securely through EmailJS

