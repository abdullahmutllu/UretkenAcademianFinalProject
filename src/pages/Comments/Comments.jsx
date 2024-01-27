import React from "react";
import "./comments.css";
import user from "./user.png";
function Comments() {
  return (
    <div className="comment">
      <h1 className="heading">Yorum ekle</h1>
      <form action="" method="post" className="add-comment">
        <textarea
          name="comment-box"
          required
          placeholder="Lütfen yorumunuzu giriniz..."
          maxLength={1000}
          cols="30"
          rows="10"
        ></textarea>
        <input type="submit" value="Yorum ekle" name="add-comment" className="inline-btn" />
      </form>
      <h1 className="heading"> 6 Yorum </h1>
      <div className="show-comments">
        <div className="box">
          <div className="user">
            <img src={user} alt="" />
            <div>
              <h3>Ana Kullanıcı</h3>
              <span>21-25-2023</span>
            </div>
          </div>
          <p className="text">this is comment for DenemeKullanıcı</p>
          <form action="" method="post" className="flex-btn">
            <button type="submit" name="delete_comment" className="inline-delete-btn">
              edit comment
            </button>
          </form>
        </div>
        <div className="box">
          <div className="user">
            <img src={user} alt="" />
            <div>
              <h3>DenemeKullanıcı</h3>
              <span>21-25-2023</span>
            </div>
          </div>
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, corporis.</p>
        </div>

        <div className="box">
          <div className="user">
            <img src={user} alt="" />
            <div>
              <h3>DenemeKullanıcı</h3>
              <span>21-25-2023</span>
            </div>
          </div>
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, corporis.</p>
        </div>
        <div className="box">
          <div className="user">
            <img src={user} alt="" />
            <div>
              <h3>DenemeKullanıcı</h3>
              <span>21-25-2023</span>
            </div>
          </div>
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, corporis.</p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
