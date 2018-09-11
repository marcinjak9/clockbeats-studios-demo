import CMS from 'netlify-cms'

import HomePagePreview from './preview-templates/HomePagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('home', HomePagePreview)
