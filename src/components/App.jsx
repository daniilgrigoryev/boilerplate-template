import React from 'react'
import { hot } from 'react-hot-loader/root'
import Template from './Template'
import Container from './Container'
import Box from './Box'
import Logo from '~/images/logo.png'
import Discount from '~/images/discount.png'
import Magazine from '~/images/magazine.png'
import Goods from '~/images/goods.png'
import Cancel from '~/images/cancel.png'
import Tick from '~/images/tick.png'
import { render } from 'react-dom'

import quizQuestions from "../api/quizQuestions.js";
import quizResults from "../api/quizResults.js";

import QuizContainer from "./QuizContainer";
import ResultContainer from "./ResultContainer";

class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        questions: quizQuestions,
        resultDescriptions: quizResults,
        answers: {
          "Недоверыч": 0,
          "Скидулькин": 0,
          "Умелов": 0,
        },
        finalResult: [],
        quizComplete: false,
        marker: 1
      };
      this.changeAnswer = this.changeAnswer.bind(this);
    }
    changeAnswer(selectedAnswer) {
        var updatedAnswers = Object.assign({}, this.state.answers);
        updatedAnswers[selectedAnswer]++;
        if (this.state.marker === this.state.questions.length) {
            var calculatedResult = calculateResult(updatedAnswers);
            let rules = this.state.finalResult.slice();
            let newOne = rules.concat(calculatedResult);
            this.setState((prevState, props) => ({
            answers: updatedAnswers,
            quizComplete: true,
            finalResult: newOne
            }));
        } else {
            var oneUp = this.state.marker;
            oneUp++;
            setTimeout(() => {
            this.setState({ answers: updatedAnswers, marker: oneUp });
            }, 500);
        }
    }
    renderQuiz() {
        return (
          <div>
            <QuizContainer
              marker={this.state.marker}
              changeAnswer={this.changeAnswer}
              questions={this.state.questions}
            />
          </div>
        );
      }
      renderResult() {
        return (
          <div>
            <ResultContainer
              finalResult={this.state.finalResult}
              resultDescriptions={this.state.resultDescriptions}
            />
          </div>
        );
      }
    render() {
        return (
            <Template>
                <Container>
                    <Box className="first">
                        <div className="logo">
                            <img src={Logo}/>
                        </div>
                        <div className="description">
                            <span>залепись</span>
                            <span>цена</span>
                        </div>
                        <div className="depiction">
                            <span>с 17 февраля по 8 марта 2020 г.</span>
                        </div>
                    </Box>
                    <Box className="second">
                        <div className="logo">
                            <img src={Discount} alt=""/>
                        </div>
                        <div className="description">
                            <span>
                                Получите <br/>
                                на кассе купон <br/>
                                со скидками
                            </span>
                        </div>
                        <div className="depiction">
                            <span>При покупке от 700 руб.</span>
                        </div>
                    </Box>
                    <Box className="third">
                        <img src={Magazine} alt=""/>
                    </Box>
                    <Box className="fourth">
                        <div className="logo">
                            <img src={Goods} alt=""/>
                        </div>
                        <div className="description">
                            <span>
                                Выберите товар<sup>***</sup><br/>
                                и наклейте<br/>
                                скидку
                            </span>
                        </div>
                    </Box>
                    <Box className="fifth">
                        <div className="logo">
                            <img src={Cancel} alt=""/>
                        </div>
                        <div className="description">
                            <span>
                                Наклейка <br/>
                                перекрывает<br/>
                                штрих-код<br/>
                                на упаковке
                            </span>
                        </div>
                    </Box>
                    <Box className="sixth">
                        <div className="logo">
                            <img src={Tick} alt=""/>
                        </div>
                        <div className="description">
                            <span>
                                Наклейка <br/>
                                не перекрывает<br/>
                                штрих-код<br/>
                                на упаковке
                            </span>
                        </div>
                    </Box>
                    <Box className="seventh">
                        <div className="description">
                            <span>Пройди <br/> тест</span>
                        </div>
                        <div className="depiction">
                            <span>
                                Значимость этих проблем настолько очевидна,
                                что постоянный количественный рост и сфера нашей
                                активности позволяет оценить значение новых предложений.
                            </span>
                        </div>
                    </Box>
                    <Box className="quiz">
                        <div>
                            {this.state.quizComplete && this.renderResult()}
                            {!this.state.quizComplete && this.renderQuiz()}
                        </div>
                    </Box>
                    <section className="maling">
                        <h2>Подписаться на рассылку</h2>
                        <p className="description">
                            Значимость этих проблем настолько очевидна, что постоянный количественный рост и <br/>сфера нашей активности позволяет оценить значение новых предложений.
                        </p>
                        <form className="form">
                            <input type="text" placeholder="Имя" className="text"/>
                            <input type="email" placeholder="E-mail" className="text"/>
                            <input type="button" value="Подписаться" className="button"/>
                        </form>
                    </section>
                </Container>
                <footer>
                    <h4>Выдача и использование купонов: <span>17.02 – 08.03.2020</span></h4>
                    <p className="description">
                        Условия проведения акции: <br/>
                        Совершите покупку на сумму от 700 руб.* в период с 17.02.2020 г. по 08.03.2020 г. и получите на кассе купон с наклейками-скидками** на последующие покупки в магазинах «ДИКСИ». Выбирайте товар*** и наклеивайте скидку**. *700 руб. без учета табачной продукции (табак, табачные изделия и курительные принадлежности, в том числе трубки, кальяны, сигаретная бумага, зажигалки) и алкогольной продукции с установленной минимальной розничной ценой. Сумма покупки рассчитывается после применения всех скидок. ** Скидка предоставляется на последующую покупку товаров***, кроме табачной продукции (табак, табачные изделия
                        и курительные принадлежности, в том числе трубки, кальяны, сигаретная бумага, зажигалки) и алкогольной продукции с установленной минимальной розничной ценой. Скидка предоставляется в размере, указанном на наклейке,
                        и распространяется только на тот товар***, на который она наклеена, и рассчитывается от цены, действующей в магазине на момент приобретения товара***. Скидка не суммируется и не распространяется на действующие скидки/акции.
                        *** В акции не участвуют следующие товары: товары со скидками, акционные товары, табачная продукция (табак, табачные изделия и курительные принадлежности, в том числе трубки, кальяны, сигаретная бумага, зажигалки) и алкогольная продукция с установленной минимальной розничной ценой. Скидка, наклеенная на такой товар, не применяется и сгорает, восстановлению не подлежит. В случае утери купона наклейки-скидки не восстанавливаются. Количество купонов ограничено. Информацию об организаторе акции, правилах ее проведения, количестве купонов с наклейками-скидками, о виде/типе скидок, сроках, месте и порядке их получения, об установленных ограничениях можно узнать по телефону:
                        8 (800) 333-02-01, а также в торговых залах магазинов «ДИКСИ» и на сайте www.dixy.ru в период проведения акции.
                    </p>
                </footer>
            </Template>
        );
    };
}

function calculateResult(answers) {
    const getMax = object => {
      return Object.keys(object).filter(x => {
        return object[x] === Math.max.apply(null, Object.values(object));
      });
    };
    return getMax(answers);
  }


export default hot(App)
