// this affects what routes and reducers are built in production
export const productionFeatures = {
  dev: true,
  urbRoute: false, // leave the reducer alone if you don't want to break things!
  referrals: true,
  help: true,
};

export const devIconInProduction = false;

export const firebase = {
  development: {
    config: {
    
    },
    vapidKey:""
  },
  production: {
    config: {
    },
    vapidKey:""
  },
  reCAPTCHA_site_key: "",
};

// TODO integrate these

// export const NotFoundPage = <Component />;

// export const SignInPage = <Component />;

export const onAuthStateChanged = (auth) => {
  console.log("auth changed");
};

export const defaultTheme = "dark";

// export const logoThumbnail =
// export const logoSmall =
// export const logoMedium =
// export const logoLarge =
