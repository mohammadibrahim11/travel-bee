// import { Download } from "@mui/icons-material";
import { Page, StyleSheet } from "@react-pdf/renderer";
import { AiOutlineDownload } from "react-icons/ai";
import Pdf from "react-to-pdf";

import React, { useRef } from "react";
import { useLoaderData } from "react-router-dom";

import "./DownloadPdf.css";

// create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },
  // section: {
  //   margin: 10,
  //   padding: 10,
  //   flexGrow: 1,
  // },
});

const DownloadPdf = () => {
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);
  // const onDocumentLoadSuccess = ({ numPages }) => {
  //   setNumPages(numPages);
  // };
  const pdfData = useLoaderData();
  console.log(pdfData);
  const {
    bookingDate,
    journey,
    userName,
    packageName,
    email,
    totalPrice,
    transactionId,
    contact,
  } = pdfData;
  const ref = useRef();

  return (
    <div className="pdf-card-section">
      <div className="card  mt-5">
        <div className="text-end mb-2">
          <Pdf targetRef={ref} fileName="booking_document.pdf">
            {({ toPdf }) => (
              <button
                className="w-50 w-lg-25 w-md-25  btn btn-success"
                onClick={toPdf}
              >
                <AiOutlineDownload style={{ width: "20px", height: "20px" }} />{" "}
                Download Pdf
              </button>
            )}
          </Pdf>
        </div>
        <Page ref={ref} style={styles.page}>
          <div>
            <p className="text-center fw-semibold mt-4 mb-3">Booking Details</p>
          </div>
          {/* <view> */}{" "}
          <div className="row ">
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 pdf-left-column-text ">
              <div>
                <p>UserName : {userName}</p>
                <p> Email : {email}</p>
              </div>
              <div>
                <p> name : {packageName}</p>
                <p>Price : ${totalPrice}</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 col-xl-6 pdf-right-column-text">
              <p> Transaction_Id : {transactionId}</p>
              <p> Trip : {journey}</p>
              <p> Date : {bookingDate}</p>
              <p> Contact : {contact}</p>
            </div>
          </div>
          <div className="terms_conditions ">
            <h4 className="title mt-5 mb-2">Terms & Conditions</h4>
            <div>
              <div>
                <h5 className="fw-semibold mt-5 fs-6">Payments</h5>

                <ul className="conditions-text">
                  <li>
                    If you are purchasing your ticket using a debit or credit
                    card via the Website, we will process these payments via the
                    automated secure common payment gateway which will be
                    subject to fraud screening purposes.
                  </li>
                  <li>
                    If you do not supply the correct card billing address and/or
                    cardholder information, your booking will not be confirmed
                    and the overall cost may increase. We reserve the right to
                    cancel your booking if payment is declined for any reason or
                    if you have supplied incorrect card information. If we
                    become aware of, or is notified of, any fraud or illegal
                    activity associated with the payment for the booking, the
                    booking will be cancelled and you will be liable for all
                    costs and expenses arising from such cancellation, without
                    prejudice to any action that may be taken against us.
                  </li>
                  <li>
                    Golobe may require the card holder to provide additional
                    payment verification upon request by either submitting an
                    online form or visiting the nearest Golobe office, or at the
                    airport at the time of check-in. Golobe reserves the right
                    to deny boarding or to collect a guarantee payment (in cash
                    or from another credit card) if the card originally used for
                    the purchase cannot be presented by the cardholder at
                    check-in or when collecting the tickets, or in the case the
                    original payment has been withheld or disputed by the card
                    issuing bank. Credit card details are held in a secured
                    environment and transferred through an internationally
                    accepted system.
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <h5 className="fw-semibold fs-6 mt-4">Contact Us</h5>
              <p className="contact-info">
                If you have any questions about our Website or our Terms of Use,{" "}
                <br /> please contact: Golobe Group Q.C.S.C Golobe Tower P.O.{" "}
                <br />
                Box: 22550 Doha, <br /> State of Qatar Further contact details
                can be found at golobe.com/help
              </p>
            </div>
            <div></div>
          </div>
        </Page>
      </div>
    </div>
  );
};

export default DownloadPdf;
