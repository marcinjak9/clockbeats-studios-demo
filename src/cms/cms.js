import CMS from 'netlify-cms'

import HomePagePreview from './preview-templates/HomePagePreview'
import CommunityPagePreview from './preview-templates/CommunityPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('home-page', HomePagePreview)
CMS.registerPreviewTemplate('community-page', CommunityPagePreview)
