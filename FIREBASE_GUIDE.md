# Firebase Deployment Guide

Since you are using Firebase, here is the specific checklist to get your site live on `sociolee.co.za`.

## Prerequisites
1.  **Install Firebase CLI** (if not done): 
    ```bash
    npm install -g firebase-tools
    ```
2.  **Login**: 
    ```bash
    firebase login
    ```

## Step 1: Initialize Project
If you haven't connected this folder to a Firebase project yet:
1.  Run:
    ```bash
    firebase use --add
    ```
2.  Select your existing **Sociolee** project from the list (or create a new one).
3.  When asked for an alias, type `default`.

*Note: I have already created the `firebase.json` file for you, so you don't need to run `firebase init hosting`.*

## Step 2: Deploy
1.  Build your project one last time to be sure:
    ```bash
    npm run build
    ```
2.  Deploy to Firebase:
    ```bash
    firebase deploy
    ```

## Step 3: Connect Domain
1.  Go to the [Firebase Console](https://console.firebase.google.com/).
2.  Select your project.
3.  Go to **Hosting** in the side menu.
4.  Click **Add Custom Domain**.
5.  Enter `sociolee.co.za`.
7.  Verify, and then update the **A Records** as instructed by Firebase.

## Step 4: SSL (HTTPS)
Good news! **Firebase Hosting enables SSL automatically**.
*   Once your domain is verified and connected, Firebase will provision a free SSL certificate for `sociolee.co.za`.
*   This process can take up to **24 hours** (usually much faster), during which your site might show a "Not Secure" warning.
*   **Action Required**: None. Just wait for Firebase to complete the setup.

## Troubleshooting
**"Failed to list Firebase projects" Error?**
**"Failed to list Firebase projects" Error?**
If you see this error, your login session has likely expired. Fix it by running:
1.  `firebase logout`
2.  `firebase login`
3.  Try `firebase init` again.
