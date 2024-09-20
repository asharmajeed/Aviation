import { QRCodeSVG } from "qrcode.react";

const QRCodeComponent = ({ url }) => {
  return (
    <div className="my-4 w-fit mx-auto">
      <QRCodeSVG value={url} size={256} />
      <p className="mt-2 text-center text-gray-600">
        Scan to access the repair list
      </p>
    </div>
  );
};

export default QRCodeComponent;
