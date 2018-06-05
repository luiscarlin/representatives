import React from 'react'
import styled from 'styled-components'

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
  }

//   <div class="wrap">
// 	<h1 class="pen-title">CSS Expanding Search Box</h1>
// 	<p class="pen-description">An expanding search box/form powered purely by CSS.</p>
// 	<!-- Begin Your Code -->

// 	<form method="get" class="search-form" action="#">
// 		<label for="search-field"><span class="screen-reader-text">To search this site, enter a search term</span></label>
// 		<input class="search-field" id="search-field" type="text" name="s" value="" aria-required="false" autocomplete="off" placeholder="Search&hellip;" />
// 		<button class="search-submit"><span class="screen-reader-text">Search</span><i class="fa fa-search"></i></button>
// 	</form>

// 	<!-- End Your Code -->
// </div><!-- .wrap -->

// Set some base styles on the search form


// .search-form {
// 	display: inline-block;
// 	float: right;
// 	position: relative;
// 	width: 100%;
// }

// // Set height for the search form elements
// .search-field,
// .search-submit {
// 	height: rem(60);
// }

// // Style the search text input
// .search-field {
// 	@include position(absolute, null 0 null null);
// 	@include transition (all 0.5s ease-in-out);

// 	background-color: transparent;
// 	border: none;
// 	border-bottom: 1px solid rgba($color-white,.5) !important; // Add an !important for CodePen because it's adding inline styles when focused
// 	box-sizing: border-box;
// 	color: rgba($color-white, .5);
// 	cursor: pointer;
// 	font-size: rem(36);
// 	font-weight: 300;
// 	opacity: 0;
// 	padding-right: rem(60);
// 	width: 0;
// 	z-index: 3;

// 	// When we focus on the text input, display it
// 	&:focus {
// 		cursor: text;
// 		opacity: 1;
// 		outline: none;
// 		width: 100%;
// 		z-index: 1;

// 		// When focused AND hovering the text input, do not alter the default styles of the search icon
// 		&:hover {

// 		~ .search-submit .fa-search {
// 				color: $color-white;
// 			}
// 		}
// 	}

// 	// When hovering the text input, adjust the color of the search icon
// 	&:hover {

// 		~ .search-submit .fa-search {
// 			color: lighten($color-white, 10%);
// 		}
// 	}
// }

// // Style the submit button
// .search-submit {
// 	@include transition (all 0.2s ease-in-out);

// 	background-color: transparent;
// 	border: none;
// 	float: right;
// 	position: relative;
// 	width: rem(60);
// 	z-index: 2;

// 	// Adjust the color of the search icon on hover
// 	&:hover {

// 		.fa-search {
// 			color: lighten($color-white, 10%);
// 		}
// 	}
// }

// // Style our search icon
// .fa-search {
// 	@include transition (all 0.2s ease-in-out);

// 	color: $color-white;
// 	font-size: rem(36);
// }


  render() {
    return (
      <div>
        <input type='text'
          placeholder={this.props.placeholder}
          onChange={(event) => this.setState({ searchTerm: event.target.value })}
        />
        <button onClick={() => this.props.onButtonClick(this.state.searchTerm)}>
          Search
        </button>
      </div>
    )
  }
}
