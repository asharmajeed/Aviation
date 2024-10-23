import { QRCodeSVG } from "qrcode.react";
import { Link } from "react-router-dom";

const QRCodeComponent = ({ url }) => {
  return (
    <>
      <div>
        Scan the QR Code below or{" "}
        <Link to={url} className="text-blue-500 underline">
          click here
        </Link>
      </div>
      <div className="my-4 w-fit mx-auto">
        <QRCodeSVG value={url} size={256} />
        <p className="mt-2 text-center text-gray-600">
          Scan to access the repair list
        </p>
      </div>
    </>
  );
};

export default QRCodeComponent;
