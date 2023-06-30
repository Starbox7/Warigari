import 'package:flutter/material.dart';

class Signup extends StatelessWidget {
  const Signup({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          Center(
            child: Column(
              mainAxisSize: MainAxisSize.max,
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                Padding(
                  padding: EdgeInsets.all(20),
                  child: Container(
                    width: 360,
                    height: 50,
                    color: Color(0x4472C4), // Replace with your desired color
                    child: ElevatedButton(
                      onPressed: () {
                        debugPrint('.');
                      },
                      style: ElevatedButton.styleFrom(
                        padding: EdgeInsets.all(16),
                      ),
                      child: Text(
                        '회원가입',
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
          Positioned(
            top: MediaQuery.of(context).padding.top +
                16, // Adjust the position based on your requirements
            left: 12, // Adjust the position based on your requirements
            child: IconButton(
              icon: Icon(
                Icons.arrow_back_ios_new_outlined,
                color: Color(0xFF4472C4),
              ),
              onPressed: () {
                Navigator.maybePop(context); // Handle the back button press
              },
            ),
          ),
        ],
      ),
    );
  }
}
