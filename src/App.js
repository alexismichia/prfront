import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Picker,
  Image,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [clientNumber, setClientNumber] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState('');

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
  <Image
    source={require('./img/iconografia-menu.png')}
    style={styles.menuIcon}
  />
  <Text style={styles.appName}>Smartwater</Text>
</View>
      <Text style={styles.slogan}>Registrar nueva venta</Text>
      <View style={styles.form}>
      <View style={styles.inputContainer}>
      <Image
        source={require('./img/iconografia-usuario.png')}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de cliente"
        value={clientNumber}
        onChangeText={setClientNumber}
        underlineColorAndroid="transparent"
      />
    </View>
    <View style={styles.inputContainer}>
  <Image
    source={require('./img/iconografia-botella.png')}
    style={styles.icon}
  />
  <View style={styles.pickerContainer}> {/* Contenedor con borde inferior */}
    <Picker
      style={styles.picker}
      selectedValue={product}
      onValueChange={(itemValue, itemIndex) => setProduct(itemValue)}
    >
      <Picker.Item label="Seleccionar producto" value="" />
      <Picker.Item label="Producto 1" value="product1" />
      <Picker.Item label="Producto 2" value="product2" />
    </Picker>
  </View>
</View>

        <View style={styles.inputContainer}>
      <Image
        source={require('./img/cantidad.png')}
        
      />
      <Text style={styles.label}>Cantidad</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.quantityButton} onPress={decrementQuantity}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity style={styles.quantityButton} onPress={incrementQuantity}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={styles.inputContainer}>
      <Image
        source={require('./img/pesos.png')}
        
      />
      <TextInput
        style={styles.input}
        placeholder="Precio"
        value={price}
        onChangeText={setPrice}
        underlineColorAndroid="transparent"
      />
    </View>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonLabel}>+</Text>
      </TouchableOpacity>
      <Text style={styles.addButtonHint}>Agregar producto</Text>
      <View style={styles.sellButtonContainer}>
        <TouchableOpacity style={styles.sellButton}>
          <Text style={styles.sellButtonText}>Vender</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Para sombra en Android
    margin: 10, // Margen para que la sombra sea visible
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF', // Cambiado a blanco
    marginRight: 50,
    marginBottom: 10, // Separación del header respecto al contenido
  },
  menuIcon: {
    width: 16, // Ajusta el tamaño del icono según lo necesites
    height: 16, // Ajusta el tamaño del icono según lo necesites
    marginRight: 30,
   
  },
  appName: {
    color: '#340068',
    fontSize: 18,
    fontWeight: 'bold',
  },
  slogan: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
    color: '#340068',
  },
  form: {
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#340068',
    paddingLeft: 10,
    color: '#340068',
  },
  pickerContainer: {
    borderBottomWidth: 1, // Añade solo el borde inferior
    borderColor: '#340068', // Color del borde
    marginBottom: 10, // Agrega margen inferior para separación
  },
  picker: {
    flex: 1,
    height: 40,
    color: '#340068',
  },
  label: {
    color: '#340068',
    fontSize: 16,
    marginRight: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#340068',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  quantityButtonText: {
    color: '#FFF',
    fontSize: 12,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 5,
    color: '#340068',
  },
  addButton: {
    backgroundColor: '#FFF',
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#340068',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonLabel: {
    color: '#340068',
    fontSize: 24,
  },
  addButtonHint: {
    color: 'rgba(52, 0, 104, 0.5)',
    fontSize: 12,
  },
  sellButtonContainer: {
    marginTop: 40,
  },
  sellButton: {
    backgroundColor: '#340068',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  sellButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  icon: {
    width: 16,
    height: 16,
    backgroundColor: '#340068',
    borderRadius: 8,
    marginRight: 10,
  },
});

export default App;
