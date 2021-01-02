import React from 'react';
import GoogleAd from '../../../components/GoogleAd';
import reactLogo from '../../../images/tabs/reactLogo.png';

const GITHUB_ICON ='http://www.protractortest.org/img/GitHub-Mark-Light-32px.png';
const REACT_ORG = 'https://gist.github.com/riipandi/3097780';
const REACT_GITHUB = 'https://github.com/reactjs/reactjs.org';

const resReact = () => {
    return(
        <div className='page-tab-body'>
            <div>
                <h3>ReactJS</h3>
            </div>
            <div className='tc'>
                <img className='pr4 pt4 pb4 react-logo' src={reactLogo} alt='react Logo'/>
            </div>
            <div className='tc pt4'>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red' href={REACT_GITHUB} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={GITHUB_ICON} alt='github log' /> 
                    ReactJS on GitHub                 
                </a>
                <a class='f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-green' href={REACT_ORG} target="_blank" rel="noopener noreferrer">
                    <img className='pr2' src={GITHUB_ICON} alt='github log' /> 
                    ReactJS Org                 
                </a>
            </div>




            <GoogleAd slot="1541085932" classNames="page-right-side" />
        </div>
    )
}
export default resReact;