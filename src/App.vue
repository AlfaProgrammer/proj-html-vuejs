<template>
  <div id="app">
    <!--COmposizione della pagina
  /// HEADER

      topBar social links
      logo
      nav menu

  /// MAIN ( all children components are container width if not specified differently )

    ->Jumbo full width

    ->Foot journal section
        Title
        List with 3 articles preview displayed 
          (Each preview template)
          Title
          Author + Date of Publication

    ->Popular recepies section

        Title
        Main preview with short description (on the left) 
          Selected Recipe Image
          Selected Recipe Title
          Selected Recipe Sub-Title
          Selected Recipe Short description
          Selected Recipe Learn More Button
        Grid of 6 images (on the right), recepies images
          

    ->Culinary collection section
      Title
      Description
      8 collection slots in a grid 4 * 4

    ->Farm to Table section (Coposed by 3 main areas)
      Head area
        title
        description
        button
      Section Area (on the left side of the container)
        main content in evidence
        grid 6 links
        button load more
      Aside (on the right side of the container) 
        Ads
        Search
        Follow Us
        More Ads


  /// FOOTER

    ->Sbscribe jumbo full width
    ->IMG collage full width 
    ->Business details container width
      4 sections
        1
          Logo
          Social links
        2 
          Site links
        3 
          Contacts 
        4
          App Download links    
      Copiright & PageUp Button
    
    -->


  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">

</style>
