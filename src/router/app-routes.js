import Hello from '@/components/Hello'
import Introduction from '@/components/Introduction'
import Computed from '@/components/Computed'
import StyleBindings from '@/components/StyleBindings'
import ConditionalRendering from '@/components/ConditionalRendering'

export default [
        {
          path: '/',
          name: 'Hello',
          component: Hello,
          meta : {
            isVisible : true
          }
        },
        {
          path: '/introduction',
          name: 'Introduction',
          component: Introduction,
          meta : {
            isVisible : true
          }
        },
        {
          path: '/computed',
          name: 'Computed',
          component: Computed,
          meta : {
              isVisible : false
          }
        },
        {
          path: '/style-bindings',
          name: 'StyleBindings',
          component: StyleBindings,
          meta : {
            isVisible : true
          }
        },
        {
          path: '/conditional-rendering',
          name: 'ConditionalRendering',
          component: ConditionalRendering,
          meta : {
            isVisible : true
          }
        }
      ]