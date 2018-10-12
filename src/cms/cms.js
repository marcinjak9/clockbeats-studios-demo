import CMS from 'netlify-cms'

import HomePagePreview from './preview-templates/HomePagePreview'
import CommunityPagePreview from './preview-templates/CommunityPagePreview'

import '../layouts/all.sass'

CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('community-page', CommunityPagePreview)
