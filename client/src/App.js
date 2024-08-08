import { useEffect, useState } from "react";
import styles from "./App.module.css";
import getApiKey from "./lighthouse/getApiKey";
import uploadFile from "./lighthouse/uploadFile";
import getWalletDetails from "./untils/getWalletDetails";
import getNewData from "./untils/getNewData";
import { Toaster } from "react-hot-toast";
import Grid from "./components/Grid";

function App() {
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [maxFeePerGas, setMaxFeePerGas] = useState(0);
  const [maxPriorityFeePerGas, setMaxPriorityFeePerGas] =
    useState(0);
  const [apiKey, setApiKey] = useState(null);
  const [imagesData, setImagesData] = useState([]);

  const getApiKeyClient = async () => {
    const key = await getApiKey();
    localStorage.setItem("apiKey", key);
    setApiKey(key);
  };

  useEffect(() => {
    const value = localStorage.getItem("apiKey");
    if (value) {
      setApiKey(value);
    } else {
      const getApiDetails = async () => {
        await getApiKeyClient();
      };
      getApiDetails();
    }
  }, []);

  useEffect(() => {
    if (!account) setImagesData(null);
  }, [account]);

  console.log(process.env.REACT_APP_CONTRACT_ADDRESS);

  async function connectWallet() {
    if (window.ethereum !== undefined) {
      try {
        await getWalletDetails(
          setContract,
          setProvider,
          setAccount,
          setMaxFeePerGas,
          setMaxPriorityFeePerGas
        );
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      console.error("Install MetaMask");
    }
  }

  return (
    <div className={styles.App}>
      <Toaster position="top-center" reverseOrder={false} />
      <header className={styles.header}>
        <h1 className={styles.logo}>DFiles</h1>

        {account && (
          <div className={styles.fileUpload}>
            <label htmlFor="file">Upload File</label>
            <input
              type="file"
              name="file"
              id="file"
              onChange={(e) =>
                uploadFile(
                  apiKey,
                  e.target.files,
                  contract,
                  account,
                  maxFeePerGas,
                  maxPriorityFeePerGas
                )
              }
            />
            <button
              onClick={() => {
                getNewData(contract, account, setImagesData);
              }}
            >
              Refresh Data
            </button>
          </div>
        )}

        {!account ? (
          <button onClick={connectWallet}>Login</button>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <p>{account}</p>
            <img
              src="avatar.png"
              alt="avatar"
              className={styles.avatar}
            />
          </div>
        )}
      </header>

      <hr className={styles.line}></hr>
      {!imagesData ? (
        <div className={styles.container}>
          <div className={styles.containerImageStyle}>
            <img src="dataPlaceHolder.png" alt="" />
          </div>
        </div>
      ) : (
        <Grid images={imagesData}></Grid>
      )}
    </div>
  );
}

export default App;
