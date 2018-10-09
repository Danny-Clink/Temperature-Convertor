class TemperatureConverter {

  _getTransformedTemperature() {
    switch(this.Temperature.substr(-1).toLowerCase()) {
      case "c":
        return this._getCelsiumConvertions();
        break;
      case "f":
        return this._getFarengheitConvertions();
        break;
      case "k":
        return this._getKelvinConvertions();
        break;
      default:
        alert('this is not a temperature');
      break;
    }
  }

  get Temperature() {
    return document.getElementById("temperature").value;
  }

  _getCelsiumConvertions() {
    let fahrenheit = parseInt(this.Temperature) * 5/9 + 32;
    let kelvin = parseInt(this.Temperature) + 273.15;

    fahrenheit = Math.floor(fahrenheit);
    kelvin = Math.floor(kelvin);

    const result = JSON.stringify({fahrenheit, kelvin});
    alert(result);

    return result;
  }

  _getFarengheitConvertions() {
    let kelvin = (parseInt(this.Temperature) + 459.67) * 5/9;
    let cesium = (parseInt(this.Temperature) - 32) * 5/9;

    kelvin = Math.floor(kelvin);
    cesium = Math.floor(cesium);

    const result = JSON.stringify({kelvin, cesium});
    alert(result);

    return result;
  }

  _getKelvinConvertions() {
    let fahrenheit = parseInt(this.Temperature) * 9/5 - 459.67;
    let cesium = parseInt(this.Temperature) - 273.15;

    fahrenheit = Math.floor(fahrenheit);
    cesium = Math.floor(cesium);

    const result = JSON.stringify({fahrenheit, cesium});
    alert(result);

    return result;
  }
}



