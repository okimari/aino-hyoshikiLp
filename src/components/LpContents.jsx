import React from 'react';
// import {
//     FacebookShareButton,
//     LineShareButton,
//     TwitterShareButton,
// } from "react-share";
import {
    FacebookIcon,
    LineIcon,
    TwitterIcon
} from 'react-share';
import '../components/Sass/LpContents.css';
import LogoImag from '../images/top-logo.png';
import DemoImag from '../images/demo-img.png';
// import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import { motion } from "framer-motion";
import { Frame } from "framer"

function LpContents() {
    return (
        <>
            {/* <motion.div
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            /> */}
            {/* <Frame
                animate={{ rotate: 360 }}
                transition={{ duration: 2 }}
            /> */}
            {/* <motion.a
                whileHover={{ scale: 1.2 }}
                onHoverStart={e => { }}
                onHoverEnd={e => { }}
            /> */}
            {/* <motion.button
                whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
            /> */}
            <div className="mainTop-view">
                <header>
                    <div className="top-logo-img">
                        <img src={LogoImag} className="logo-img" alt="ロゴ" />
                    </div>
                    <ul className="flex-box-between">
                        <li><FacebookIcon round={true} size={34} /></li>
                        <li><LineIcon round={true} size={34} /></li>
                        <li><TwitterIcon round={true} size={34} /></li>
                    </ul>
                </header>
                <div className="Contener-box">
                    <div className="Wrap-content-styles">
                        <div className="Heart-svg">
                            <p ><FavoriteSharpIcon style={{ fontSize: 40 }} /></p>
                        </div>
                        <h1>愛<br />の<br />標<br />識</h1>
                        <p>~あの頃の私にさようなら~</p>
                    </div>
                </div>

                <div className="fixd-btn">
                    {/* <motion.div
                        className="container"
                        initial={{ scale: 0 }}
                        animate={{ rotate: 360, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 360,
                            damping: 20,
                            duration: 2
                        }}
                    /> */}
                    <a href="#">見積モリヲハジメル</a>
                </div>
            </div>

            <section className="Second-content-style" id="Second-content-style">
                <div className="Wrap-content-styles">
                    <div className="flex-box-between">
                        <div className="left-box">
                            <p className="contents-number-title">
                                1
                            </p>
                            <dl>
                                <dt>
                                    <h2>愛の標識の思考</h2>
                                </dt>
                                <dd>
                                    <p>
                                        愛の標識の目的は、恋人・もしくは交友関係をもっている相手にがメンヘラすぎて困っている人向けにサービスを転換していきます。
                                        <span>※メンヘラの方におすすめするものではありません。陳謝。</span>
                                        ダイスキでダイスキでたまらない相手と別れる時はだれでも苦しい思いをするものです。
                                        でも、人生の再スタートを明るい気持ちですごして欲しい。別れる相手の気持ちなど気にせずスッキリして欲しいのです。
                                        今、パートナーと別れたい方は一度お見積りを作成してみて、自分の気持ちと一度正直に向き合ってみてください。今後も、メンヘラと別れるためのアプリを開発していく予定なので！乞うご期待！
                                    </p>
                                </dd>
                            </dl>
                        </div>
                        <div className="right-box">
                            <img src={DemoImag} alt="demo画像" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="Thaad-content-style" id="Thaad-content-style">
                <div className="Wrap-content-styles">
                    <div className="flex-box-between">
                        <div className="left-box">
                            <img src={DemoImag} alt="demo画像" />
                        </div>
                        <div className="right-box">
                            <p className="contents-number-title">
                                2
                            </p>
                            <dl>
                                <dt>
                                    <h2>愛の標識の思考</h2>
                                </dt>
                                <dd>
                                    <p>
                                        作成した、お見積りをパートナーに送る事で、<br />
                                        ★自分を相手にやばいやつだと認識させる<br />
                                        ★作成したお見積りを提示して請求する（一度請求してみる）<br />
                                        ★遠回しに相手の気持ちを精神崩壊できる<br />
                                    </p>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>

            <section className="Second-content-style">
                <div className="Wrap-content-styles">
                    <div className="flex-box-between">
                        <div className="left-box">
                            <p className="contents-number-title">
                                3
                            </p>
                            <dl>
                                <dt>
                                    <h2>愛の標識の展望</h2>
                                </dt>
                                <dd>
                                    <p>
                                        この企画にたどり着いたのは、私の経験があったからこそ思いついたものです。DVや、メンヘラな行動で恐怖な思いをしました。世の中にはそのような行為で悩んでいいる女性は多いと思います。
                                        少しでも、力になりたい。
                                        その思いだけでこの企画を進めてきました。
                                        ネガティブに捉えられがちですが、少しだけ目線をかえるだけであなたの気持ちは楽になるかもしれませんよ。
                                        世の中の女性が、特定のパートナーと別れる際に、怖い思いをしなくて良い世の中になれるようなものを今後も展開していく予定なので。
                                        応援などよろしくお願いいたします。
                                    </p>
                                </dd>
                            </dl>
                        </div>
                        <div className="right-box">
                            <img src={DemoImag} alt="demo画像" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="Fourth-content-style">
                <div className="Wrap-content-styles">
                    <div className="Contener-box">
                        <div className="Heart-svg">
                            <p><FavoriteSharpIcon style={{ fontSize: 40 }} /></p>
                        </div>
                        <h1>愛<br />の<br />標<br />識</h1>
                        <ul>
                            <li>
                                <p>サイトマップ</p>
                            </li>
                            <li>
                                <p><FavoriteSharpIcon style={{ fontSize: 20 }} /></p>
                            </li>
                            <li>
                                <a href="#Second-content-style">愛の標識の思考について</a>
                            </li>
                            <li>
                                <a href="#Thaad-content-style">愛の標識でできること</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <footer>
                <small>Copyright © 2020 OKIMARI Inc. All Rights Reserved.</small>
            </footer>
        </>
    )
};

export default LpContents;