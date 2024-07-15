//cssと同じような書き方ができる
//テンプレート文字列で囲う
//jsの中にcssを書くことができるライブラリ
export const StyledJsx = () =>{
    return(
        <>
        <div className="container">
            <p className="title">- Styled Jsx -</p>
            <button className="button">FIGHT!!</button>
        </div>
        {/* scssを使用すれば疑似要素を使用することができる*/}
         {/* デフォルトでは疑似要素は使用不可*/}
        <style jsx="true">{`
        .container {
        border: solid 2px #392eff;
        border-radius: 20px;
        margin: 8px;
        padding: 8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
}
        .title{
        margin: 0;
        color: #3d84a8;
}
.button{
        background-color: #abedd8;
        border: none;
        padding: 8px;
        border-radius: 8px;
        &:hover{
                background-color: #46cdcf;
                color: #fff;
                cursor: pointer;
        }
}
        `}</style>
        </>
    );
};