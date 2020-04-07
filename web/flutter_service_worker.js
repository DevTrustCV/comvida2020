'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "0131e1a0bbe004566566023ff5e4db33",
"/main.dart.js": "55efc1afc63fefd695a036d434e9342b",
"/favicon.png": "fc6ffb47a86f385bdbddc388a1088dce",
"/icons/favicon-16x16.png": "fc6ffb47a86f385bdbddc388a1088dce",
"/icons/favicon.ico": "4cc33cdd42d404a17ef22218b62ae98d",
"/icons/apple-icon.png": "c7ded923f0f7e3e27fc634a0a4444389",
"/icons/apple-icon-144x144.png": "4daef09db4fba64861cf8a4dca1ddad5",
"/icons/android-icon-192x192.png": "822aee57c8abc8e39ef324beea839302",
"/icons/apple-icon-precomposed.png": "c7ded923f0f7e3e27fc634a0a4444389",
"/icons/apple-icon-114x114.png": "0e322d273648283c746ad8f51a5869e7",
"/icons/ms-icon-310x310.png": "6fc3724394c59a057eb806da1b788054",
"/icons/Icon-192.png": "e19ccaca9ae57acff3d5e6370bddb608",
"/icons/ms-icon-144x144.png": "4daef09db4fba64861cf8a4dca1ddad5",
"/icons/apple-icon-57x57.png": "1075c341b251b7b46369b5fe76345bd5",
"/icons/apple-icon-152x152.png": "656d8ff585ac379183f581ef1f8a2b52",
"/icons/ms-icon-150x150.png": "4f5e5f31e06598c20461f80b5ca3edb3",
"/icons/android-icon-72x72.png": "0c47351422471907e32a7bea9224d9b6",
"/icons/android-icon-96x96.png": "98bffb6a34978e8c8266ee67dc91ea7e",
"/icons/android-icon-36x36.png": "a4adc8c971914644a76a43ce3a162d54",
"/icons/apple-icon-180x180.png": "5947bb4c13790d8ded1265631e56cc02",
"/icons/favicon-96x96.png": "98bffb6a34978e8c8266ee67dc91ea7e",
"/icons/android-icon-48x48.png": "1024012f3e19b770d440f46b68c65cd7",
"/icons/apple-icon-76x76.png": "b51d5f3d204204391761acb41a32f8a0",
"/icons/apple-icon-60x60.png": "8cf3d73837db9c0faa1e8943fe30d123",
"/icons/android-icon-144x144.png": "4daef09db4fba64861cf8a4dca1ddad5",
"/icons/apple-icon-72x72.png": "0c47351422471907e32a7bea9224d9b6",
"/icons/apple-icon-120x120.png": "b079bae5264cc1cdbf59d59e8cf2db3f",
"/icons/Icon-512.png": "46f2a5b944447d49502ec852e5e06a46",
"/icons/favicon-32x32.png": "502ace845232242ab0438de64d20ed11",
"/icons/ms-icon-70x70.png": "19fbeafc842bca8ae0171c18a4fff90a",
"/manifest.json": "fa253ea721084fc2cf57284f3d7bdcdf",
"/assets/LICENSE": "248e8595d7c545aeaae716fbbcd39916",
"/assets/AssetManifest.json": "ee9cde77276575be727a9487efeaf1cf",
"/assets/ios/.symlinks/plugins/flutter_hex_color/logo.png": "406deeaedfe5fb063cb49c938fba2587",
"/assets/FontManifest.json": "2b33098ecc47e8f215ac4d0dca0d5224",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/cache/geo_ine.json": "d8fbce8471e19ddeba418214367152b2",
"/assets/assets/images/tenor.gif": "5ca3f2f8ebe9fbd08d0f9b7afb99b408",
"/assets/assets/images/men.png": "061d711a2cd33887e74f4e1d2074aafa",
"/assets/assets/images/background_img.png": "585454054546473a7cf775c77ac243be",
"/assets/assets/images/sta_na_bo_mon.jpeg": "fa88634ad9775df684577553aa0049f8",
"/assets/assets/images/banner_entrada.png": "9f319b6e80ff278ef3a3a9e08b3872bd",
"/assets/assets/images/women.png": "d0a4c55495b0bec442b4c7a268fb7743",
"/assets/assets/images/tick_2.png": "8388c3de81c6a7e4219f7bab993678f9",
"/assets/assets/images/icons/Noti%25CC%2581cias_Off.png": "c8262ed4cf24dd9bb1e7e14c9340b004",
"/assets/assets/images/icons/Participe_On.png": "1e9b237db6d73cbdbfdf7171055c2641",
"/assets/assets/images/icons/Dicas_Off.png": "adb314e26022af9731ead8a32c891b57",
"/assets/assets/images/icons/Participe_Off.png": "abfd71593d568c014bcbf39ab2b3bd92",
"/assets/assets/images/icons/Noti%25CC%2581cias_On.png": "accf24e428d9c483f4cb0e9973b1b786",
"/assets/assets/images/icons/Dicas_ON.png": "9f8edf6e95a74fa15ca0cb2ede74a40e",
"/assets/assets/images/flaga.png": "2a42f4f9eb886556b36ce66e067ea529",
"/assets/assets/images/flag_cv.jpeg": "8c292220773168156ea3cb5676bf72db",
"/assets/assets/noticia_test.png": "6e1ada1b3afc1f2f30036e9eea632803",
"/assets/assets/otp.flr": "d3d963fe06685dadb72b305c8e51c62c",
"/assets/assets/logo.png": "23277d3c776c906559e42572158f4b9c",
"/assets/assets/fonts/Roboto-Light.ttf": "88823c2015ffd5fa89d567e17297a137",
"/assets/assets/fonts/Lato-Light.ttf": "2fe27d9d10cdfccb1baef28a45d5ba90",
"/assets/assets/fonts/Roboto-Bold.ttf": "dbcc2d576ca222f307fef3fedcb441ec",
"/browserconfig.xml": "0abb7be098e790917c96a043a0e8a903"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
