import './NavPanel.css'
function NavPanel() {
    return (
        <div className="Nav">
            <div className="Log_box">
                <img width='60' src="https://img.artlebedev.ru/everything/citron/citron-logo.png"/>
            </div>
            <div className="Nav_box">
                <a href="">Состояние станции  </a>
                <a href="">  О нас </a>
                <a href=""> Контакты </a>
                <a href="">Магазин</a>
            </div>




            <div className="Login_box">
                <button className="button-71" role="button">Войти в сеть</button>
           </div>

        </div>

    );
}

export default NavPanel;


