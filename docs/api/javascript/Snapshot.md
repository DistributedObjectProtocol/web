# &lt;Snapshot&gt;

Is a special object/class that is created with [Collector.emit](/api/javascript/Collector-emit) and [Collector.emitWithoutDestroy](/api/javascript/Collector-emitWithoutDestroy). With snapshots we can undo and redo the mutations collected by our collector. Snapshots are useful for optimistic updates or undo/redo feature.


> See also
- [Snapshot.undo](/api/javascript/Snapshot-undo)
- [Snapshot.redo](/api/javascript/Snapshot-redo)