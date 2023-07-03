import 'package:flutter/material.dart';

class Input extends StatelessWidget {
  const Input({
    super.key,
    required this.init,
    required this.obscureText,
    required this.onChangeText,
    required this.hint,
  });

  final String init;
  final bool obscureText;
  final void Function(String value) onChangeText;
  final String hint;

  @override
  Widget build(BuildContext context) {
    return TextFormField(
      initialValue: init,
      obscureText: obscureText,
      onChanged: (value) => onChangeText(value),
      decoration: InputDecoration(
        hintText: hint,
        border: InputBorder.none,
        enabledBorder: InputBorder.none,
        focusedBorder: InputBorder.none,
      ),
    );
  }
}
