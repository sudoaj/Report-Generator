UselessTextInput = (props) => {
  return (
    <TextInput
      multiline
      numberOfLines={4}
      onChangeText={(text) => onChangeText(text)}
      value={this.state.value}
      editable
      maxLength={400}
    />
  );
};
