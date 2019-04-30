transport.on('open', socket)
transport.on('message', socket)
transport.on('close', socket)
transport.on('error', socket)

transport.on('connect', node)
transport.on('reconnecting', node)
transport.on('reconnect', node)
transport.on('disconnect', node)
