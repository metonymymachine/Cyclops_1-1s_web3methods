import {
  addWalletListener,
  connectWallet,
  get_root,
  loadPreSaleStatus,
  loadSaleStatus,
  metonymyHodlerMint,
  mint,
  mintBundlePrice,
  mintPresale,
  mintPublic,
  onboard,
  supply,
  togglePresale,
  toggleSale,
  walletReset,
  walletState,
  withdraw,
} from "./script";

//connect to the wallet
global.implementWallet = () => {
  connectWallet();
};

//minting for general public
global.mintPublic = (amount) => {
  mintPublic(amount);
};

//Presale mint
global.mintPresale = (id) => {
  mintPresale(id);
};

//bundle price minting

global.mint_bunlde_price = (amount) => {
  mintBundlePrice(amount);
};

//wallet event listener
global.walletChanges = () => {
  addWalletListener();
};

//reset the wallet
global.walletReset = () => {
  walletReset();
};

//toggle presale

global.toggle_presale = () => {
  togglePresale();
};

//toggle sale
global.toggle_sale = () => {
  toggleSale();
};

//withdraw
global.withdraw = () => {
  withdraw();
};

//presale and sale status
global.pre_sale_status = () => {
  loadPreSaleStatus();
};

//load sale status
global.sale_status = () => {
  loadSaleStatus();
};

//get root

global.root = () => {
  get_root();
};

global.state = walletState();
global.onboardObj = onboard;
