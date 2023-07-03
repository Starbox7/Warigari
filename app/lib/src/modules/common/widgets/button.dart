import 'package:app/src/modules/common/styles/size.dart';
import 'package:flutter/material.dart';

class Button extends StatelessWidget {
  final void Function() onPress;
  final String text;

  const Button({
    super.key,
    required this.onPress,
    required this.text,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onPress,
      child: Text(
        text,
        textAlign: TextAlign.center,
        style: TextStyle(
          color: Theme.of(context).colorScheme.secondary,
          fontSize: rem(2),
          fontWeight: FontWeight.bold,
        ),
      ),
    );
  }
}
