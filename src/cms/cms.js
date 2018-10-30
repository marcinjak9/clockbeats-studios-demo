import CMS from 'netlify-cms'

import HomePagePreview from './preview-templates/HomePagePreview'
import CommunityPagePreview from './preview-templates/CommunityPagePreview'
import ServicesPagePreview from './preview-templates/ServicesPagePreview'
import SingleServicePagePreview from './preview-templates/SingleServicePagePreview'
import UserPagePreview from './preview-templates/UserPagePreview'

import '../layouts/all.sass'

CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('community', CommunityPagePreview)
CMS.registerPreviewTemplate('services', ServicesPagePreview)
CMS.registerPreviewTemplate('single-services', SingleServicePagePreview)
CMS.registerPreviewTemplate('users', UserPagePreview)
