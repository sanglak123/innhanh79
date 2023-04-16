import Companys from "@/components/Dashboard/Systems";
import Logo_79GT from "@/components/svg/Logo_79GT";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Admin_Dashboard = () => {
  const [showMenu, setShowMenu] = useState(true);

  const [views, setViews] = useState("Companys");

  const handleRenderViewsDB = () => {
    switch (views) {
      case "Companys":
        return <Companys />;

      default:
      case "Companys":
        return <Companys />;
    }
  };
  return (
    <div id="dashboard">
      <div className="db_content">
        <div className="db_left_side">
          <div className="db_logo">
            {showMenu && (
              <>
                <Logo_79GT />
                <p>www.innhanh79.com</p>
              </>
            )}

            {showMenu ? (
              <Button onClick={() => setShowMenu(false)}>
                <span className="material-symbols-outlined">menu_open</span>
              </Button>
            ) : (
              <Button onClick={() => setShowMenu(true)}>
                <span className="material-symbols-outlined">menu_open</span>
              </Button>
            )}
          </div>
          <span>Menu</span>
          <hr className="m-0" />

          <div className="db_menu">
            <div
              className={
                views === "Companys" ? "menu_item menu_active" : "menu_item"
              }
              onClick={() => setViews("Companys")}
            >
              <span>Companys</span>
              <span className="material-symbols-outlined">home_app_logo</span>
            </div>

            <div className="menu_item" onClick={() => setViews("Categorys")}>
              <span>Categorys</span>
              <span className="material-symbols-outlined">category</span>
            </div>

            <div className="menu_item" onClick={() => setViews("Productions")}>
              <span>Productions</span>
              <span className="material-symbols-outlined">view_comfy</span>
            </div>

            <div className="menu_item" onClick={() => setViews("Productions")}>
              <span>Sign Out</span>
              <span className="material-symbols-outlined">logout</span>
            </div>
          </div>
        </div>
        <div className="db_right_side">
          <div className="views_content">
            <div className="views_header">
              <p>Dashboard / {views}</p>
              <div className="header_link">
                <Link className="me-2" href={"/"}>
                  Trang chủ
                </Link>
                <p className="ms-2">Admin</p>
              </div>
            </div>
            <div className="views_main">{handleRenderViewsDB()}</div>
            <div className="views_bot">
              Bản quyền thuộc về www.innhanh79.com. Design by HAG
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin_Dashboard;
