@extends('adminmodern::layout.index')

@section('content')
    <simple-page
        v-if="(layout != null) && (data_manager != null)"
        :layout="layout"
        :data_manager="data_manager"
        :records="records"
    >
    </simple-page>
@stop

@section('scripts')
    <script src="{{ $script }}"></script>
@stop