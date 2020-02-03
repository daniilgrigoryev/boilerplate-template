require(['DS/PlatformAPI/PlatformAPI', 'DS/WAFData/WAFData', 'DS/DataDragAndDrop/DataDragAndDrop', 'DS/i3DXCompassServices/i3DXCompassServices', 'DS/TagNavigatorProxy/TagNavigatorProxy'], function(
  API,
  WAFData,
  DnD,
  i3DXCompassServices,
  TagNavigatorProxy
) {
  widget.addEvent('onLoad', function() {
    widget.API = API
    widget.WAFData = WAFData
    widget.DnD = DnD
    widget.i3DXCompassServices = i3DXCompassServices
    widget.TagNavigatorProxy = TagNavigatorProxy
    if (!widget.getValue('URL3DSpace')) {
      i3DXCompassServices.getServiceUrl({
        serviceName: '3DSpace',
        platformId: widget.getValue('x3dPlatformId'),
        onComplete: function(data) {
          var url = null
          try {
            url = data[0].url
            if (url == undefined) url = data
          } catch (ex) {
            url = data
          }
          widget.setValue('URL3DSpace', url)
          window.widgetInstance.init()
        },
        onFailure: function() {
          alert('Cant`t retrieve URL3DSpace! ')
          console.warn('Failure')
        },
      })
    } else {
      window.widgetInstance.init()
    }
  })
})
