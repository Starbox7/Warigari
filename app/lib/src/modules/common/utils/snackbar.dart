import 'package:flutter/material.dart';

class ErrorSnackBar extends SnackBar {
  ErrorSnackBar(
      {super.key, required String message, required BuildContext context})
      : super(
          content: Center(
              child: Text(
            message,
            style: const TextStyle(
              fontWeight: FontWeight.bold,
              fontFamily: 'CarterOneRegular',
            ),
          )),
          backgroundColor: Theme.of(context).colorScheme.error,
          duration: const Duration(seconds: 3),
        );
}
