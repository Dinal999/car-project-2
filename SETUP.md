# NEXORA Automotive — setup guide

A premium dark automotive inventory website built with HTML, CSS, vanilla JavaScript and Supabase.

## Included
- Public home page with featured inventory, search, make/body-type filters and sorting.
- Vehicle detail page with photo gallery, specifications, features and WhatsApp inquiry flow.
- Supabase email/password admin login.
- Admin dashboard to add, edit and delete vehicles.
- Multiple image uploads to Supabase Storage.
- Demo inventory is included so the public site can be previewed before Supabase is configured.

## 1. Create the Supabase project
1. Create a project at https://supabase.com/.
2. Open **SQL Editor** in the Supabase dashboard.
3. Run the complete contents of `supabase/schema.sql`.
4. Open **Project Settings → API** and copy the Project URL and anon/public key (or publishable key).
5. Open `js/config.js` and replace `YOUR_SUPABASE_PROJECT_URL` and `YOUR_SUPABASE_ANON_OR_PUBLISHABLE_KEY`.
6. Replace `94770000000` with the dealership's WhatsApp number, digits only, including country code.

Never put a Supabase `service_role` or secret key in browser JavaScript.

## 2. Create the first admin user
1. In Supabase, open **Authentication → Users**.
2. Add a user with the dealership administrator's email and a strong password (or create an account through the dashboard's user-management controls).
3. Keep public sign-ups disabled unless you have a deliberate user-registration requirement.
4. Sign in at `admin.html` with that user's email and password.

The supplied RLS policy allows authenticated users to manage inventory. Since this starter has no role-management table, only create trusted admin accounts and do not enable public sign-up. For a multi-user production system, add a dedicated admin role and policies before launch.

## 3. Run locally
For best results, serve the folder through a local static server instead of opening files directly. For example, in this folder run:

```bash
python -m http.server 5500
```

Then visit `http://localhost:5500`. The admin page is `http://localhost:5500/admin.html`.

## 4. Deploy
You can deploy the folder to GitHub Pages, Netlify or another static host. Add the deployed site URL to Supabase **Authentication → URL Configuration → Site URL / Redirect URLs**. The public site reads available vehicles from Supabase; if Supabase is not configured, the home page uses sample demo inventory.

## 5. Before showing this to a real dealership
- Replace the sample brand name, logo, address, phone and WhatsApp number with the client's approved details.
- Replace sample cars and photos with images the business owns or has permission to use.
- Confirm prices, vehicle descriptions and availability with the client.
- Add the client's domain and hosting plan to the quotation; these are not included in the free demo.
- Configure admin-only roles for production if more than one trusted account is needed.
- Add privacy notice / consent language before collecting and storing customer inquiries. The current inquiry form opens WhatsApp and does not store the lead in the database.
- Test image upload, editing, deletion, mobile layout and all RLS policies using a non-owner test account before launch.

## Notes
- Prices are stored as LKR numeric values and formatted in the browser.
- Vehicle photos are stored in the public `vehicle-images` bucket. Anyone with a photo URL can view those images; only authenticated users can upload or delete them.
- The included sample photos are remote Unsplash image URLs for layout demonstration. Replace them before commercial use and verify each image's usage rights.
