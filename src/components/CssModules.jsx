//cssを書いているファイルを読み込む
//importをするときに変数名を付けてクラスに割り当てる
import classes from "./CssModules.module.scss";

export const CssModules = () =>{
    return(
        <div className={classes.container}>
            <p className={classes.title}>- CSS Modules -</p>
            <button className={classes.button}>FIGHT!!</button>
        </div>
    );
};