import React from 'react'

export class Content extends React.Component{
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            color: "black",
            backgroundColor: "white"
        }
    }

    handleClick(el) {
        el.target.style.backgroundColor = getRandomColorStyle()
        el.target.style.color= getRandomColorStyle()
        function getRandom() {
            return Math.floor(Math.random() * 255);
        }
        function getRandomColorStyle() {
            return 'rgb(' + getRandom() + ',' + getRandom() + ',' +
                getRandom() + ')';
        }
    }
    render() {
        return (
            <div>
                <p onClick={this.handleClick}>Хоббі(Тиснути сюди!!!)</p>
                <ul>
                    <li>Комп'ютерні ігри</li>
                    <li>Фільми</li>
                    <li>Аніме</li>
                </ul>

                <p onClick={this.handleClick} >Улюблені фільми:(Тиснути сюди!!!)</p>

                <ol>
                    <li>"Гаррі Поттер"</li>
                    <li>"Залізна людина"</li>
                    <li>"Відьмак"</li>
                </ol>

                <p>Карпа́ти (пол. Karpaty, нім. Karpaten, словац. Karpaty, угор. Kárpátok, рум. Carpaţi, серб. Карпати)
                    — гірська система на сході Центральної Європи, на території:України, Угорщини, Чехії, Польщі,
                    Словаччини, Румунії, Сербії, та Австрії. Простягається від околиць Братислави до Залізних Воріт на
                    1500 км, утворюючи опуклудугу, що замикає Середньодунайську рівнину.</p>

            </div>
        );
    }
};