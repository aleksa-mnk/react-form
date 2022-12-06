import React from 'react';
import { Component } from 'react';
import { ImageFieldComponent } from '../../core/types/types';

class ImageField extends Component<ImageFieldComponent> {
  render() {
    const { fileInputRef, errors, onChangeHandler } = this.props;
    return (
      <>
        <label className="form__label" htmlFor="profile-image">
          PICTURE
        </label>
        <input
          className="file-input"
          ref={fileInputRef}
          onChange={(event) => {
            onChangeHandler(
              event,
              URL.createObjectURL(
                (fileInputRef.current?.files as FileList | (Blob | MediaSource)[])[0]
              ),
              'imgSrc'
            );
          }}
          type="file"
          name="accept"
          id="profile-image"
          accept="image/png, image/gif, image/jpeg"
        />
        {errors.imgSrc && <span className="form__error-text">{errors.imgSrc}</span>}
      </>
    );
  }
}

export default ImageField;
