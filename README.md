# The Study Blueprint – Class 10
Supabase project `the-study-blueprint` is already set up (tables, security, storage, realtime).
index.html is already configured with its URL and public key.

## Make yourself admin (one time)
1. Supabase dashboard > Authentication > Users > Add user (your email + password, tick "Auto Confirm").
2. SQL Editor: insert into admins (user_id) select id from auth.users where email='YOUR_EMAIL';

## Host on GitHub Pages
1. github.com > New repository (public), e.g. the-study-blueprint.
2. Add file > Upload files > upload index.html > Commit.
3. Settings > Pages > Branch: main, folder: / (root) > Save.
Site: https://<username>.github.io/<repo>/
