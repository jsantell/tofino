/*
Copyright 2016 Mozilla

Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed
under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
*/

import React, { PropTypes } from 'react';

import * as SharedPropTypes from '../../model/shared-prop-types';
import * as UIConstants from '../../constants/ui';
import Style from '../../../shared/style';
import Page from '../page';

const CONTENT_AREA_STYLE = Style.registerStyle({
  flex: 1,
  position: 'relative',
  zIndex: UIConstants.BROWSER_CONTENT_BASE_ZINDEX,
});

const BrowserContent = function(props) {
  return (
    <div id="browser-content"
      className={CONTENT_AREA_STYLE}>
      {props.pages.map((page, pageIndex) => (
        <Page key={`page-${page.id}`}
          page={page}
          index={pageIndex}
          isActive={pageIndex === props.currentPageIndex}
          {...props} />
      ))}
    </div>
  );
};

BrowserContent.propTypes = {
  pages: SharedPropTypes.Pages.isRequired,
  currentPageIndex: PropTypes.number.isRequired,
};

BrowserContent.displayName = 'BrowserContent';

export default BrowserContent;
