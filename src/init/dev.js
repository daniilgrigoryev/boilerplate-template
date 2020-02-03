// <link rel="stylesheet" type="text/css" href="//uwa.netvibes.com/lib/c/UWA/assets/css/standalone.css"/>
// <script type="text/javascript" src="//uwa.netvibes.com/lib/c/UWA/js/UWA_Standalone_Alone.js"></script>
//<![CDATA[
// change this URL

// const URL_3DSPACE = 'https://3dspace.2017x.igatec.com:444/3dspace'
const URL_3DSPACE = 'https://3dspace-sw-d02.igatec.com/3dspace'

const MyWidget = {
  onLoad: function() {
    // if you have to use DS modules you need to create  dummy object or make your own implementation in createWidgetDummies.
    // It is required for development mode, bus is not used in files for 3DDashboard
    createWidgetDummies()
    widget.setValue('URL3DSpace', URL_3DSPACE)
    window.widgetInstance.init()
  },
}
widget.addEvent('onLoad', MyWidget.onLoad)

function createWidgetDummies() {
  // dummy for WAFData (DS/WAFData/WAFData) and implementing authenticatedRequest(url, params) method
  widget.WAFData = {
    authenticatedRequest: function(url, params) {
      function createCORSRequest(method, url) {
        var xhr = new XMLHttpRequest()
        if ('withCredentials' in xhr) {
          xhr.open(method, url, true)
        } else if (typeof XDomainRequest != 'undefined') {
          xhr = new XDomainRequest()
          xhr.open(method, url)
        } else {
          xhr = null
        }
        return xhr
      }

      var xhr = createCORSRequest('GET', url)
      if (!xhr) {
        throw new Error('CORS not supported')
      }

      xhr.onload = function() {
        var rspns = JSON.parse(xhr.responseText)
        params.onComplete(rspns)
      }

      xhr.onerror = function() {
        console.log('There was an error!')
      }
      xhr.withCredentials = true
      xhr.send()
    },
  }
  // dummy for API (DS/PlatformAPI/PlatformAPI)
  widget.API = {
    subscribe: function() {
      console.dir(arguments)
    },
    publish: function() {
      console.dir(arguments)
    },
  }
  // dummy for DnD (DS/DataDragAndDrop/DataDragAndDrop)
  widget.DnD = {
    droppable: function() {
      console.dir(arguments)
    },
    draggable: function() {
      console.dir(arguments)
    },
  }
  // dummy for i3DXCompassServices (DS/i3DXCompassServices/i3DXCompassServices)
  widget.i3DXCompassServices = {}
  // dummy for TagNavigatorProxy (DS/TagNavigatorProxy/TagNavigatorProxy)
  widget.TagNavigatorProxy = {}
}
