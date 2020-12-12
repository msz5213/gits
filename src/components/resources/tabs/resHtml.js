import React from 'react';
import { Grid, Cell } from 'react-mdl';
import utils from '../../../utilities/utils.json';
import GoogleAd from '../../../components/GoogleAd';

const resHtml = () => {
    return(
        <div className='page-tab-body'>
            <Grid className='page-tab-grid'>
                <Cell className='page-tab-first-col' col={12}>
                    <div>
                        <h5>
                            Basic and Advance Web Development {utils.courseOutline}
                        </h5>
                        <h5>List of HTML Tags:</h5>
                        <table>
                            <tr>
                                <th>Tags</th>
                                <th>Description</th>
                            </tr>
                            <tr>
                                <td>{utils.tag.comment}</td>
                                <td>Defines a comment</td>
                            </tr>
                            <tr>
                                <td>{utils.tag.doctype}</td>
                                <td>Defines the document type</td>
                            </tr>
                            <tr>
                                <td>{utils.tag.a}</td>
                                <td>Defines a hyperlink</td>
                            </tr>
                            <tr>
                                <td>{utils.tag.abbr}</td>
                                <td>Defines an abbreviation or an acronym</td>
                            </tr>
                            <tr>
                                <td>{utils.tag.address}</td>
                                <td>Defines contact information for the author/owner of a document</td>
                            </tr>
                            <tr>
                                <td>{utils.tag.area}</td>
                                <td>Defines an area inside an image map</td>
                            </tr>
                        </table>
                        <GoogleAd slot="1541085932" classNames="page-right-side" />
                </div>
                </Cell>
            </Grid>
        </div>
    )
}
export default resHtml;