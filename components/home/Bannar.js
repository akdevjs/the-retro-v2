import { useState, useEffect } from "react";
import { collection, addDoc, query, getDocs } from "firebase/firestore";
import { Toaster, toast } from "react-hot-toast";
import bannarStyle from "../../styles/bannar.module.scss";

import { db } from "../../firebase";
function Bannar() {
  // states
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState("top-center");

  // funtions
  const containsObject = (obj, list) => {
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i].email.toLowerCase() === obj.email.toLowerCase()) {
        return true;
      }
    }

    return false;
  };
  const getUsersFromDb = async () => {
    const q = query(collection(db, "subscribedUsers"));
    let arr = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (!containsObject(doc.data(), arr)) {
        arr.push(doc.data());
      }
    });
    setUsers(arr);
  };
  const addUserToDb = async (email) => {
    setLoading(true);
    if (!containsObject({ email }, users)) {
      addDoc(collection(db, "subscribedUsers"), {
        email,
      })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          toast.success("Subscribed successfully", { border: "2px solid red" });
          setLoading(false);
          setEmail("");
          setUsers([...users, { email }]);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
          setLoading(false);
        });
    } else {
      toast.error("You've Already subscribed");

      setLoading(false);
    }
  };

  // Click handlers
  const handleClick = (e) => {
    e.preventDefault();
    if (email.length === 0) {
      toast.error("Please Enter the  Email");
    } else {
      if (
        email.toLowerCase().includes("@") &&
        email.toLowerCase().includes(".com")
      ) {
        addUserToDb(email);
      } else {
        toast.error("Please Enter the valid Email");
      }
    }
  };

  // use Effect
  useEffect(() => {
    getUsersFromDb();
  }, []);

  return (
    <>
      <Toaster
        position={position}
        reverseOrder={true}
        toastOptions={{
          duration: 2000,
          style: {
            background: "#363636",
            fontFamily: "poppins",
            borderRadius: "0",
            fontSize: "1.5rem",
            color: "#fff",
          },
        }}
      />
      <div className={bannarStyle.main__bannar}>
        <div className={bannarStyle.main__child}>
          <div className={bannarStyle.img__main__bannar}>
            <img loading="lazy" src="./imgs/bannar-picture.png" alt="" />
          </div>
          <div className={bannarStyle.sub__main__bannar}>
            <h2>Subscribe to our news letter to stay updated</h2>
            <form onSubmit={handleClick} className={bannarStyle.cre__bannar}>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <button
                className={bannarStyle.primary_button}
                disabled={loading}
                type="submit"
              >
                {loading ? (
                  <span className={bannarStyle.loader}></span>
                ) : (
                  <>Subscribe</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bannar;
