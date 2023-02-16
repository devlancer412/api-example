const menu = [
  { heading: "Main Nav" },
  {
    icon: "dashboard",
    text: "Dashboard",
    link: "/",
  },
  {
    icon: "cc-alt2",
    text: "Payments",
    link: "/sales",
  },
  {
    icon: "wallet",
    text: "Wallets",
    link: "/analytics",
  },
  {
    icon: "user",
    text: "Profile",
    link: "/invest",
  },
  {
    heading: "Marketplace",
  },
  {
    icon: "tranx",
    text: "Exchange",
    active: false,
    subMenu: [
      {
        text: "Instant Swaps",
        link: "/project-card",
      },
    ],
  },
  {
    icon: "users",
    text: "Peer-to-Peer",
    active: false,
    subMenu: [
      {
        text: "User List - Regular",
        link: "/user-list-regular",
      },
      {
        text: "User List - Compact",
        link: "/user-list-compact",
      },
      {
        text: "User Details - Regular",
        link: "/user-details-regular/1",
      },
      {
        text: "User Profile - Regular",
        link: "/user-profile-regular",
      },
      {
        text: "User Contact - Card",
        link: "/user-contact-card",
      },
    ],
  },
  {
    icon: "file-docs",
    text: "Staking",
    active: false,
    subMenu: [
      {
        text: "KYC List - Regular",
        link: "/kyc-list-regular",
      },
      {
        text: "KYC Details - Regular",
        link: "/kyc-details-regular/UD01544",
      },
    ],
  },
  {
    icon: "alert-circle",
    text: "Disputes",
    active: false,
    subMenu: [
      {
        text: "Messages",
        link: "/app-messages",
      },
      {
        text: "Chats / Messenger",
        link: "/app-chat",
      },
      {
        text: "Mailbox",
        link: "/app-inbox",
      },
      {
        text: "Calendar",
        link: "/app-calender",
      },
      {
        text: "Kanban",
        link: "/app-kanban",
      },
      {
        text: "File Manager",
        link: "/app-file-manager",
        badge: "new",
      },
    ],
  },
  {
    heading: "Cilistia",
  },
  {
    icon: "opt",
    text: "DAO",
    active: false,
    subMenu: [
      {
        text: "Trans List - Basic",
        link: "/transaction-basic",
      },
      {
        text: "Trans List - Crypto",
        link: "/transaction-crypto",
      },
    ],
  },
  {
    icon: "card-view",
    text: "Contracts",
    active: false,
    subMenu: [
      {
        text: "Product List",
        link: "/product-list",
      },
      {
        text: "Product Card",
        link: "/product-card",
      },
      {
        text: "Product Details",
        link: "/product-details/0",
      },
    ],
  },
  {
    icon: "file-docs",
    text: "Audit Reports",
    active: false,
    subMenu: [
      {
        text: "Invoice List",
        link: "/invoice-list",
      },
      {
        text: "Invoice Details",
        link: "/invoice-details/1",
      },
    ],
  },
];
export default menu;
